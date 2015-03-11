'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '{,*/}*.js'
// use this if you want to recursively match all subfolders:
// '**/*.js'

module.exports = function(grunt) {
    // Load grunt tasks automatically
    var glob = require('glob');
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            server: {
                options: {
                    port: 8000,
                    base: 'public',
                    logger: 'dev',
                    hostname: 'localhost',
                    middleware: function (connect, options) {
                        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                        return [
                            // Include the proxy first
                            proxy,
                            // Serve static files.
                            connect.static(options.base),
                            // Make empty directories browsable.
                            connect.directory(options.base)
                        ];
                    }
                },
                proxies: [
                    {
                        context: '/MusicYao',
                        host: '114.215.109.39',
                        port: '7001',
                        https: false,
                        changeOrigin: true
                    }
                ]
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.tmp', '<%= yeoman.app %>'],
                    middleware: function (connect,options) {
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

                        // Serve static files.
                        options.base.forEach(function(base) {
                          middlewares.push(connect.static(base));
                        });

                        // Make directory browse-able.
                        var directory = options.directory || options.base[options.base.length - 1];
                        middlewares.push(connect.directory(directory));
                        return middlewares;
                    }
                },
                proxies: [
                    {
                        context: '/MusicYao-web',
                        host: '127.0.0.1',
                        port: '7001',
                        https: false,
                        changeOrigin: true
                    }
                    , {
                        context: '/MusicYao',
                        host: '114.215.109.39',
                        port: '7001',
                        https: false,
                        changeOrigin: true
                    }
                ]
            },
            test: {
                options: {
                    hostname: 'localhost',
                    port: 9001,
                    base: ['.tmp', 'test', '<%= yeoman.app %>']
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: [
                    '<%= yeoman.app %>/src/{,*/}*.js',
                    '<%= yeoman.app %>/conf/{,*/}*.js',
                    '!<%= yeoman.app %>/src/{,*/}*.spec.js'
                ],
                //tasks: ['jshint'],
                options: { livereload: true }
            },
            requirejsConfig: {
                files: ['<%= yeoman.app %>/src/config.js'],
                tasks: ['requirejs-config-copy']
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            //uncomment this task, if you want to run karma testing everytime the scripts are changing
            //karma: {
                //files: ['app/src/**/*.js'],
                //tasks: ['karma:unit']
            //},
            gruntfile: { files: ['Gruntfile.js'] },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer', 'concat:styles']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: { livereload: '<%= connect.options.livereload %>' },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html', // index.html, 404.html, etc
                    '<%= yeoman.app %>/src/**/*.html', // arrange code by modules
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            },
            moduleMappings: {
                options: { livereload: '<%= connect.options.livereload %>' },
                files: ['<%= yeoman.app %>/src/{,*/}sub_modules.json'],
                tasks: ['combine-modules']
            },
            routeMappings: {
                options: { livereload: '<%= connect.options.livereload %>' },
                files: ['<%= yeoman.app %>/src/{,*/}routes.json'],
                tasks: ['combine-routes']
            }
            //ngtemplates: {
            //    options: { livereload: '<%= connect.options.livereload %>' },
            //    files: [
            //        '<%= yeoman.app %>/plugins/templates/**/*.html',
            //        '<%= yeoman.app %>/src/**/*.html'
            //    ],
            //    tasks: ['ngtemplates']
            //}
        },

        // grunt task for running shell command
        shell: {
            protractor: {
                options: { stdout: true },
                command: 'protractor config/e2e.conf.js'
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', '<%= yeoman.dist %>/*', '!<%= yeoman.dist %>/.git*']
                }]
            },
            afterBuild: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.dist %>/src/*.js', // remove config.js
                        '<%= yeoman.dist %>/src/**/*.spec.js', // remove all test files
                        '!<%= yeoman.dist %>/src/main.js' // keep main.js file
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/src/{,*/}*.js',
                '!<%= yeoman.app %>/src/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // requirejs task
        requirejs: {
            dist: {
                options: {
                    dir: '<%= yeoman.dist %>/src/',
                    baseUrl: '<%= yeoman.app %>/src', // Directory to look for the require configuration file
                    mainConfigFile: '<%= yeoman.app %>/src/config.js', // This is relative to the grunt file
                    modules: [
                        { name: 'main' },
                        {
                            name: 'email/module',
                            exclude: [
                                'main'
                            ]
                        }
                    ], // create a global bundle
                    preserveLicenseComments: false, // remove all comments
                    removeCombined: true, // remove files which aren't in bundles
                    optimize: 'none', // minify bundles with uglify 2
                    useStrict: true
                }
            }
        },

        // karma testing
        karma: {
            unit: {
                configFile: 'config/karma.conf.js'
            }
        },

        // Jasmine testing framework configuration options
        jasmine: {
            pivotal: {
                src: '<%= yeoman.app %>/src/**/*.spec.js',
                options: {
                    specs: 'test/specs/*.spec.js',
                    helpers: 'test/specs/*.helper.js'
                }
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '/src',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: { options: { generatedImagesDir: '<%= yeoman.dist %>/images/generated' } },
            server: { options: { debugInfo: true } }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: { browsers: ['last 1 version'] },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.',
                    app: {
                        html: '<%= yeoman.app %>/index.html',
                        ignorePath: '/'
                    },
                    dest: '.tmp/styles/'
                }]
            }
        },

        // bundle script for bower_components into app/src/main.js
        bower: { target: { rjsConfig: '<%= yeoman.app %>/src/config.js' } },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: { dest: '<%= yeoman.dist %>' },
            html: '<%= yeoman.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: { assetsDirs: ['<%= yeoman.dist %>'] },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.dist %>/images'
                }],
                options: { cache: false }
            }
        },

        // svg minify
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        // html minify
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: '**/*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
//                files: { '<%= yeoman.dist %>/styles/style.css': [ '.tmp/styles/{,*/}*.css' ] }
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: ['{,*/}*.css', '!*.min.css'],
                    dest: '<%= yeoman.dist %>/styles/',
                    ext: '.css'
                }]
            }
        },

        uglify: {
            dist: {
                files: [{
                    src: '<%= yeoman.dist %>/src/**/*.js', // source files mask
                    expand: true // allow dynamic building
                }]
            }
        },

        concat: {
            styles: {
                src: ['.tmp/styles/{,*/}*.css'],
                dest: '.tmp/styles/style.css'
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'src/loader.js',
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/sass-bootstrap/fonts/*.*',
                        'bower_components/font-awesome/fonts/*.*',
                        'bower_components/tinymce/*',
                        'bower_components/require-css/*',
                        'bower_components/nprogress/*',
                        'bower_components/stickUp/*',
                        'bower_components/videogular*/*'
                    ]
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/tinymce/',
                    dest: '<%= yeoman.dist %>/src/email/',
                    src: [
                        'langs/**',
                        'plugins/**',
                        'skins/**',
                        'themes/**'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            config: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'conf/**',
                        'plugins/**'
                    ]
                }]
            }
        },

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            dist: {
                devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
                outputFile: '<%= yeoman.dist %>/src/vendor/modernizr.js',
                files: {
                    src: [
                        '<%= yeoman.dist %>/src/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '!<%= yeoman.dist %>/src/vendor/*'
                    ]
                },
                uglify: true
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: ['compass:server', 'copy:styles'],
            test: ['copy:styles'],
            dist: [
                'compass',
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        },
        ngtemplates:  {
            'ebp.templates':        {
                src:      '<%= yeoman.app %>/src/**/*.tpl.html',
                dest:     '<%= yeoman.app %>/src/ebp-templates.js',
                options:    {
                    htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true },
                    url: function(url){
                        return url.replace('app/','');
                    }
                }
            },
            'ebp.plugins.templates':        {
                src:      '<%= yeoman.app %>/plugins/templates/**/*.tpl.html',
                dest:     '<%= yeoman.app %>/plugins/templates/ebp-plugin-templates.js',
                options:    {
                    htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true },
                    url: function(url){
                        return url.slice(url.lastIndexOf('/')+1,url.length);
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.registerTask('serve', function(target) {
        if (target === 'dist') { return grunt.task.run(['build', 'connect:dist:keepalive']); }

        grunt.task.run([
            'clean:server',
            'configureProxies:livereload',
            'concurrent:server',
  //          'concat',
            'autoprefixer',
            'combine-modules',
            'combine-routes',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', function(target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer',
            ]);
        }

        grunt.task.run([
            'connect:test',
            'karma'
        ]);
    });

    //function for process requirejs file
    function replaceBetween(string, start, end, what) {
        return string.substring(0, start) + what + string.substring(end);
    }

    grunt.registerTask('requirejs-bundle', function() {
        var indexHTML = grunt.file.read('dist/index.html');
        //remove config file
        indexHTML = replaceBetween(indexHTML,
            indexHTML.indexOf('<!--build tag-->'),
            indexHTML.indexOf('<!--end build tag-->') + '<!--end build tag-->'.length, '');
        grunt.file.write('dist/index.html', indexHTML);
    });

    grunt.registerTask('requirejs-config-copy', function() {
        var mainRequireJs = grunt.file.read('app/src/config.js');
        var configurations = mainRequireJs.substring(
            mainRequireJs.indexOf('paths'),
            mainRequireJs.indexOf('/*--requirejs config copy tag--do not remove*/')
        ) + ',';
        var testMainRequireJs = grunt.file.read('test/test-main.js.template');
        var tmpIndex = testMainRequireJs.indexOf('// configurations');
        testMainRequireJs = replaceBetween(testMainRequireJs, tmpIndex, tmpIndex + '// configurations'.length, configurations);
        grunt.file.write('test/test-main.js', testMainRequireJs);
    });

    grunt.registerTask('combine-modules', function() {
        var pattern = grunt.config.process('<%= yeoman.app %>/src/{,*/}sub_modules.json');
        var outpath = grunt.config.process('<%= yeoman.app %>/conf/_modules.js');
        glob(pattern, function (er, files) {
            var result = [];
            files.forEach(function(filepath){
                var subModules = grunt.file.readJSON(filepath);
                result.push(subModules);
            });
            var content = 'define(function(){\n'+
                "return "+JSON.stringify(result, null, '\t')+
                '\n});';
            grunt.file.write(outpath, content);
        });
    });

    grunt.registerTask('combine-routes', function() {
        var pattern = grunt.config.process('<%= yeoman.app %>/src/{,*/}routes.json');
        var outpath = grunt.config.process('<%= yeoman.app %>/conf/_routes.js');
        glob(pattern, function (er, files) {
            var result = [];
            files.forEach(function(filepath){
                var routes = grunt.file.readJSON(filepath);
                var modulePath = filepath.slice(0,filepath.lastIndexOf('/')+1)+'sub_modules.json';
                var modules = grunt.file.readJSON(modulePath);
                for(var stateName in routes){
                    var route = routes[stateName];
                    for(var moduleName in route.modules){
                        if(typeof route.modules[moduleName] === 'string'){
                            var module = modules[route.modules[moduleName]];
                            if(module){
                                routes[stateName].modules[moduleName] = module;
                            }
                        }
                    }
                }
                console.log(routes);
                result.push(routes);
            });
            var content = 'define(["conf/modules"],function(modules){\n'+
                "return "+JSON.stringify(result, null, '\t')+
                '\n});';
            grunt.file.write(outpath, content);
        });
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'cssmin',
        'copy:config',
        'requirejs',
        'clean:afterBuild',
        'copy:dist',
        'requirejs-bundle',
        'modernizr',
        'uglify',
        // 'rev', // turns on this task if you want to use revision
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};

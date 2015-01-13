describe('home page title', function() {
    var ptor = protractor.getInstance();
    it('should be requirejs', function() {
        ptor.get('/#');
        expect(ptor.getTitle()).toBe('requirejs');
    });
});

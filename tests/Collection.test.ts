import Collection from "@entity/Collection"


describe.skip('Collection class test', () => {
    it('should correctly create an instance of collection class', () => {
        const collection: Collection = new Collection
        expect(collection instanceof Collection).toBe(true)
    })
})
import Collection from "@entity/Collection"


describe('Collection class test', () => {
    it('should correctly create an instance of collection class', () => {
        let collection = new Collection
        console.log(collection)
        expect(collection instanceof Collection).toBe(true)
    })
})
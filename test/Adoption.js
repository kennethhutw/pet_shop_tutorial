var adoption = artifacts.require("./Adoption.sol");

contract('adoption', function(accounts){
    var adoptionInstance;
    var adopter = accounts[0];
    var expected = 8;

    it("should be the adoption of pet ID 8", function(){
        return adoption.deployed().then(function(instance){
                adoptionInstance = instance;
                return adoptionInstance.adopt(8, {from: adopter});
        }).then(function(){
            return adoptionInstance.adopters(8);
        }).then(function(returnAdopter){
            assert.equal(returnAdopter, adopter, "Adoption of pet ID 8 should be recorded. ");
        })
    });

     it("should be the Owner of pet ID 8", function () {
         return adoption.deployed().then(function (instance) {
             adoptionInstance = instance;
             return adoptionInstance.adopt(8, {
                 from: adopter
             });
         }).then(function () {
             return adoptionInstance.getAdopters();
         }).then(function (Adopters) {
             assert.equal(Adopters[8], adopter, "Adoption of pet ID 8 should be recorded. ");
         })
     });
})
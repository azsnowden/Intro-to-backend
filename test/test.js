const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Coffee = require('../models/coffee');

describe('Sanity Check', () => {
    it('Should be 2', ()=>{
        assert.equal(2, 1+1);
        expect(1+1).to.equal(2);
    });
});

describe('Coffee Model', async () => {
    const CoffeeData = await Coffee.getByID(3);
    console.log(CoffeeData);
    expect(CoffeeData).to.be.an.instanceOf(Coffee);
});
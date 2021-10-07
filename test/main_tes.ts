
import { ethers} from "hardhat";

var chai = require("chai");

var expect = chai.expect;
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import BigNumber from "bignumber.js";
import hre, { network } from "hardhat";
import { Contract, Signer } from "ethers";
import { Artifact, HardhatRuntimeEnvironment } from "hardhat/types";
import { Address } from "cluster";
import { Test } from "mocha";

const Web3 = require("web3");
const zeroAddress = "0x0000000000000000000000000000000000000000";

const web3 = new Web3(
    hre.network.provider
);



describe("Token", async () => {
    let accounts : SignerWithAddress[]
    let note : Contract
    beforeEach(async () => {
        accounts = await ethers.getSigners(); // Получение массива тестовых аккаунтов 
        const Note = await (ethers.getContractFactory("ERC20",accounts[1]));
        note = await Note.deploy(); //Деплой  
    });

    it('STEP 1: mint succes', async () => {
        
        try {
            await note.mint(accounts[1].address ,  2) ;
            await note.balancesOf(accounts[1].address ) ;
        }
        catch(e: any) {
            expect(e.message).to.equal("error") 
        }
    })
    it('STEP 2: mint fail', async () => {
        
        try {
            await note.mint(accounts[1].address , 2) ;
        }
        catch(e: any) {
            expect(e.message).to.equal("Nothing Money") 
        }
    })
   
   

    it('STEP 4:transfer', async () => {
        try {
            await note.mint(accounts[1].address ,  4) ;
            await note.transfer(accounts[2].address,1) ;
            await note.balancesOf(accounts[1].address ) ;
            await note.balancesOf(accounts[2].address ) ;
        }
        catch(e: any) {
            expect(e.message).to.equal("error") 
        };
    })
    it('STEP 5:transfer fail', async () => {
        try {
            await note.mint(accounts[1].address ,  10) ;
            await note.approve(accounts[2].address ,  4) ;
            await note.transfer(accounts[2].address,5) ;
            await note.balancesOf(accounts[1].address ) ;
            await note.balancesOf(accounts[2].address ) ;
        }
        catch(e: any) {
          
            expect(e.message).to.equal("Nothing Money ") 
        };
    })
    
    it('STEP 7: allowance', async () => {
        


        try {
            await note.allowance(accounts[1].address , accounts[2].address ) ;
        
        }
        catch(e: any) {
          
            expect(e.message).to.equal("error ") 
        };
 
    })
    
    it('STEP 8: approve succes', async () => {
       
       
       
        try {
            await note.mint(accounts[1].address ,  4) ;
            await note.approve(accounts[2].address ,  4) ;
            await note.balancesOf(accounts[1].address ) ;
            await note.balancesOf(accounts[2].address ) ;
        
        }
        catch(e: any) {
          
            expect(e.message).to.equal("erroretr") 
        };
    })
    it('STEP 9: approve fail', async () => {
     

        try {
            await note.mint(accounts[1].address ,  1) ;
            await note.approve(accounts[2].address ,  2) ;
          
        
        }
        catch(e: any) {
          
            expect(e.message).to.equal("") 
        };
    })
  
    it('STEP 11: burn succes ', async () => {
       


        try {
            await note.mint(accounts[1].address ,  1) ;
         
            await note.burn(accounts[1].address ,  1) ;
           
        
        }
        catch(e: any) {
          
            expect(e.message).to.equal("error") 
        };
    })
    it('STEP 12: burn fail ', async () => {
       
        try {
           
            
            await note.burn(accounts[2].address ,  1) ;
           
        
        }
        catch(e: any) {
          
            expect(e.message).to.equal("error") 
        };
    })
   




   

});

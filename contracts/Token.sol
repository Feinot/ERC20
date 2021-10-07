//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

contract ERC20{
    
    string public constant name = "MyFerstTokens";
    string public constant symbol = "MFt";
    uint8 public constant decimals = 18;
    
    uint public totalSepply;
    
    mapping (address =>uint) balances;
    mapping (address =>mapping(address=>uint)) allowed;
    
    event Transfer(address indexed _from , address indexed _to, uint indexed _value);
    event Approval(address indexed _from,address indexed _to,uint indexed _value);
    
    function mint (address to, uint value)public{
        balances[to]+=value;
        totalSepply+=value;
    }
    
    function balancesOf(address owner) public view returns(uint){
        return balances[owner];
        
    }
    function transfer(address to,uint value)public{
        require(balances[msg.sender]>=value , "Nothing Money ");
        balances[msg.sender]-=value;
        balances[to]+=value;
        emit Transfer(msg.sender,to,value);
    }
    function allowance(address _owner,address _spender)public view returns(uint){
        return allowed[_owner][_spender];
    }
    function transferFrom(address _from,address _to,uint _value) public{
        require(balances[_from]>=_value && balances[_to]+_value>= balances[_to]&&allowed[_from][msg.sender]>=_value);
        balances[_from]-=_value;
        balances[_to]+=_value;
        allowed[_from][msg.sender]-=_value;
         emit Transfer(_from,_to,_value);
    }
    
    function approve(address _spender,uint _value)public{
        require(balances[msg.sender] >= _value ,"");
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender,_spender,_value);
    }

    function burn(address owner, uint256 value) public{
          require(value <= balances[owner],"");
         
          totalSepply -= value;
          balances[owner] -= value;
         emit Transfer(owner, address(0), value);
     }
        
}
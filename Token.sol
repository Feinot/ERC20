pragma solidity 0.8.4;

contract MyFerstTokentoken{
    
    string public constant name = "MyFerstTokens";
    string public constant symbol = "MFt";
    uint8 public constant decimals = 18;
    
    uint public totalSepply;
    
    mapping (address =>uint)balances;
    mapping (address =>mapping(address=>uint)allowed;
    
    event Transfer(address index _from?address index _to?uint _value);
    event Approval(address index _from?address index _to?uint _value);
    
    function mint (address to, uint value)public{
        require(totalSepply + value >= totalSepply && balances[to] + value>=balances[to]);
        balances[to]+=value;
        totalSepply+=value;
    }
    
    function balancesOf(address owner) public view returns(uint){
        return balances[owner];
        
    }
    function transfer(address to,uint value)public{
        require(balances[msg.sender]>=value && balances[to]+value>= balances[to]);
        balances[msg.sender]-=value;
        balances[to]+=value;
        emit Transfer(msg.sender,_to,_value);
    }
    function allowance(address _owner,address _spender)public view returns(uint){
        return allowed[_owner][_spender];
    }
    function transferFrom(address _from,address _to,uint _value) public{
        require(balances[from]>=value && balances[_to]+value>= balances[_to]&&allowed[_from][msg.sender]>=_value);
        balances[_from]-=_value;
        balances[_to]+=_value;
        allowed[_from][msg.sender]-=_value;
         emit Transfer(from,_to,_value);
    }
    
    function approve(address _spender,uint _value)public{
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender,_spender,_value);
    }
        
}
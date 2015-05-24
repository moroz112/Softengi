/**
 * Created by amoroz-prom on 19.04.15.
 */
function extendClass(Child, Parent){
    var F = function F(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function  Account(owner){

    this.owner = owner || 'have no owner';
    this.accountStatus = false;

}
var v = new Account();

Account.prototype.setOwner = function setOwner(owner){
    this.owner = owner;
    console.log('Owner for deposit ', owner);
};
Account.prototype.getOwner = function getOwner(){
  return this.owner;
};
Account.prototype.createAccount = function createAccount(owner){

    this.accountStatus = true;
    this.owner = owner;
    console.log('Congradulation'+ this.owner + '!!!'  + 'You just open your ' + this.name);

};

Account.prototype.getStatus = function getStatus(){
    if(this.accountStatus == false){
        console.log('This type of account is not opened.. Create this account ');
    } else {
        console.log('Your ' + this.name + ' is already open');
    }

};

function Deposit(owner){
    Deposit.superclass.constructor.call(this,owner);
    this.depositLimitation = 1000;
    this.interestRate = 12;
    this.timeLimit = 12;
    this.profit = 0;
    this.name = 'Deposit';


    this.setDepositLimitation = function setDepositLimitation(limit){
        this.depositLimitation = limit;

        if(limit < 1000){
            console.log('Deposit limit can\'t be less then 1000$');
        } else {
            console.log('Now deposit limitation is', this.depositLimitation);
        }
        Account.prototype.getStatus.call(this);
    };
    this.setInterestRate = function setInterestRate(interestRate){
        if(interestRate > 25){
          console.log('You can\'t set interest rate more then 30% ');
        } else {
            this.interestRate = interestRate;
            console.log('Now interest rate is', this.interestRate);
        }
    };

    this.getProfit = function getProfit(){
        this.profit = this.depositLimitation/100*this.interestRate*(this.timeLimit/12);
        return 'Your profit is ' + this.profit;
    }
}
Deposit.prototype.arra = function(){
    console.log('fa');
};
function Rate(owner){
    Rate.superclass.constructor.call(this, owner);
}

function Pension(owner){
    this.name = 'PensionRate';
    Pension.superclass.constructor.call(this, owner);

}
function Client(){
    this.createDeposit = function(){
        this.deposit = new Deposit();
    },
    this.createRate = function(){
        this.rate = new Rate();
    },
    this.createPension = function(){
        this.pension = new Pension();
    }


}


extendClass(Deposit, Account);
extendClass(Rate, Deposit);
extendClass(Pension, Account);

var client = new Client();




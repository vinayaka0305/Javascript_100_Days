class Account {
    // Static properties to keep track of total accounts and total balance
    static account = 0; 
    static totalBalance = 0;

    // Constructor to initialize account number and balance
    constructor(accNum, balance) {
        this.accNum = accNum; // Account number of the instance
        this.balance = balance; // Balance of the instance

        // Increment the total number of accounts by 1
        Account.account += 1;
        // Add the balance of this account to the total balance
        Account.totalBalance += balance;
    }

    // Static method to get the total number of accounts
    static totalAccount() {
        return Account.account;
    }

    // Static method to get the total balance across all accounts
    static totalBalanceAmt() {
        return Account.totalBalance;
    }
}

// Create three instances of Account with different account numbers and balances
const acc1 = new Account('ns1', 1000);
const acc2 = new Account('ns2', 2000);
const acc3 = new Account('ns3', 3000);

// Log the total number of accounts
console.log(Account.totalAccount()); // Output: 3

// Log the total balance across all accounts
console.log(Account.totalBalanceAmt()); // Output: 6000


// Imagine you have a class called School:

// Non-static (instance):
// Each student (instance) in the school has their own unique details, like their name and grade. These are specific to each student.

// Static:
// The total number of students in the school is not specific to any one student—it’s shared by everyone. This total number is stored at the class level (static).


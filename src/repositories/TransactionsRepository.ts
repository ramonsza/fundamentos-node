import Transaction from '../models/Transaction';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  // public getBalance(): Balance {
  //   // TODO
  // }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const transactions = new Transaction({ title, value, type });

    this.transactions.push(transactions);

    return transactions;
  }
}

export default TransactionsRepository;

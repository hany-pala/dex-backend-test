import { Injectable } from '@nestjs/common';

@Injectable()
export class KlipService {
  // private readonly txHash: string;

  getTransactionReceipt(txHash: string) {
    // return new Promise((resolve, reject) => {
    const flag = false;
    if (!flag) {
      return flag;
    }
    console.log(txHash);
    return flag;
    // });
  }
}

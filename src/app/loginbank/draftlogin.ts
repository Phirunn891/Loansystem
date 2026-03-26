export class Loginbank {
  maxLength: number = 6;
//   autoload =inject(Router)
  currentIndex: number = 0;
  code: string[] = Array(this.maxLength).fill('');

  pin_btn: string[] = ['1','2','3','4','5','6','7','8','9','0'];

  enterDigits(filled: string): void {
    if (this.currentIndex < this.maxLength) {
      this.code[this.currentIndex] = filled;
      this.currentIndex++;
    }
    if (this.currentIndex === this.maxLength) {
      this.verifyCode();
    }
  }

  clearCode(): void {
    this.code = Array(this.maxLength).fill('');
    this.currentIndex = 0;
    console.log('Cleared');
  }

  verifyCode(): void {
    const pin = this.code.join('');
    console.log('Verify PIN:', pin);
    if (pin === '255402') {
    //   this.autoload.navigate(['/bankhomescreen'])
    } else {
      alert('លេខសម្ងាត់មិនត្រឹមត្រូវ');
      this.clearCode();
    }
  }
  backspace(){
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.code[this.currentIndex] = '';
    }
    console.log(this.code)
    
  }
}
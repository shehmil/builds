// Mock implementation of SplitText to allow the site to run without trial plugins
export class SplitText {
  elements: HTMLElement[];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  constructor(target: any, _vars: any) {
    const el = typeof target === 'string' ? document.querySelectorAll(target) : (target.length ? target : [target]);
    this.elements = Array.from(el);
    this.split();
  }

  split() {
    this.elements.forEach(el => {
      const text = el.innerText;
      el.innerHTML = '';
      
      // Simple word split
      const words = text.split(' ');
      words.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        
        // Simple char split
        const chars = word.split('');
        chars.forEach(char => {
          const charSpan = document.createElement('span');
          charSpan.innerText = char;
          charSpan.style.display = 'inline-block';
          wordSpan.appendChild(charSpan);
          this.chars.push(charSpan);
        });

        el.appendChild(wordSpan);
        this.words.push(wordSpan);
        
        if (i < words.length - 1) {
          el.appendChild(document.createTextNode(' '));
        }
      });
      
      // Lines are hard to mock without layout math, so we treat words as lines for basic compatibility
      this.lines = this.words; 
    });
  }

  revert() {
    this.elements.forEach(el => {
      el.innerHTML = el.innerText;
    });
  }
}

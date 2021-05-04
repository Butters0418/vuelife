export default {
  // 不用有等號 預設匯出 命名為default
  data: ['這是句子 1', '這是句子 2', '這是句子 3'],
  remove(index) {
    this.data.splice(index, 1);
    this.render();
  },
  render() {
    const ul = document.querySelector('ul');
    // this.data.forEach((item, index) => {
    //   content = `${content}<li>${item}<button type="button" class="btn-del" data-index="${index}">刪除</button></li>`;
    // })
    let content = this.data
      .map(
        (item, index) =>
          `<li>${item}<button type="button" class="btn-del" data-index="${index}">刪除</button></li>`
      )
      .join('');
    ul.innerHTML = content;
    // del Event
    const btns = document.querySelectorAll('.btn-del');
    btns.forEach((item) => {
      item.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        this.remove(index);
      });
    });
  },
  init() {
    this.render();
  },
};

export default class Section {
  constructor({renderer }, container) {
    this._container = container;
    this._renderer = renderer;
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}

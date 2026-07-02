import { moveInstrumentation } from '../../scripts/scripts.js';

function moveChildren(source, target) {
  while (source.firstChild) {
    target.append(source.firstChild);
  }
}

function buildCard(row) {
  const cells = [...row.children];
  if (!cells.length) {
    return null;
  }

  const item = document.createElement('li');
  item.className = 'stats-cards-item';
  moveInstrumentation(row, item);

  const value = document.createElement('p');
  value.className = 'stats-cards-value';
  moveChildren(cells[0], value);
  if (value.textContent.trim()) {
    item.append(value);
  }

  if (cells[1]) {
    const label = document.createElement('p');
    label.className = 'stats-cards-label';
    moveChildren(cells[1], label);
    if (label.textContent.trim()) {
      item.append(label);
    }
  }

  cells.slice(2).forEach((cell) => {
    const extra = document.createElement('div');
    extra.className = 'stats-cards-extra';
    moveChildren(cell, extra);
    if (extra.textContent.trim()) {
      item.append(extra);
    }
  });

  return item;
}

export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) {
    return;
  }

  const content = document.createElement('div');
  content.className = 'stats-cards-content';

  let cardRows = rows;
  const firstRow = rows[0];
  if (firstRow.children.length === 1) {
    const header = document.createElement('div');
    header.className = 'stats-cards-header';
    moveInstrumentation(firstRow, header);
    moveChildren(firstRow.children[0], header);
    if (header.textContent.trim()) {
      content.append(header);
      cardRows = rows.slice(1);
    }
  }

  const list = document.createElement('ul');
  list.className = 'stats-cards-list';

  cardRows.forEach((row) => {
    const card = buildCard(row);
    if (card) {
      list.append(card);
    }
  });

  if (list.children.length) {
    content.append(list);
  }

  block.replaceChildren(content);
}

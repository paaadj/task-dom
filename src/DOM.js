import { createElement } from 'react';

/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const body = document.body;
        const div = document.createElement(tag);
        div.innerHTML = content;
        body.append(div);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const div = document.createElement('div');
    div.setAttribute('class', 'item_1');
    for (let i = 0; i < childrenCount; i++) {
        let div1 = document.createElement('div');
        div1.setAttribute('class', `item_2`);
        div.append(div1);
    }
    for (let i = 2; i < level; i++) {
        const divs = div.querySelectorAll(`.item_${i}`);
        divs.forEach((item) => {
            for (let j = 0; j < childrenCount; j++) {
                const div1 = document.createElement('div');
                div1.setAttribute('class', `item_${i + 1}`);
                item.append(div1);
            }
        });
    }
    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const div = generateTree(2, 3);
    const divs = div.querySelectorAll('.item_2');
    divs.forEach((item) => {
        const section = document.createElement('section');
        section.setAttribute('class', 'item_2');
        section.innerHTML = item.innerHTML;
        item.remove();
        div.append(section);
    });
    return div;
}

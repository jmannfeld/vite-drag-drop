import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { MuuriComponent, useDrag } from 'muuri-react';
import { generateItems } from './utils';
import { Badge, Box } from '@chakra-ui/react';
import './App.css';

// App.
const App = () => {
  // Items state.
  const [items] = useState(generateItems());
  // Items to children.
  const children = items.map((props) => <Item key={props.id} {...props} />);

  return (
    <section className="grid-demo">
      <MuuriComponent
        dragEnabled
        dragPlaceholder={{
          enabled: true,
          createElement: function (item) {
            return item.getElement().cloneNode(true);
          }
        }}
      >
        {children}
      </MuuriComponent>
    </section>
  );
};

// Item component.
const Item = ({ color, width, height, title }) => {
  // Add a shadow when the item is dragging.
  const isDragging = useDrag();
  // Based on isDragging.
  const shadow = isDragging ? 'shadow' : '';
  const cardTitle = title;

  return (
    <div className={`item h${height} w${width} ${color} ${shadow}`}>
      <Box className="item-content"></Box>
    </div>
  );
};

export default App;

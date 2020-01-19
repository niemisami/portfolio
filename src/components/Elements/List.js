import React from 'react'

const ListItem = ({ item }) => (
  <li>{item}</li>
)

const List = ({ items }) => (
  <ul>
    {items.map(item => <ListItem item={item} />)}
  </ul>
)

export default List

/*!UroxGvT3uDMQCT1va20i43ZZSxo*/

export default function (node, logger) {

  node.kind('Record');

  node.inherit('TodoList.SQL.Record');
  node.set('mysql.table', 'entries');

  node.field('parent',   'Primitive.ID');
  node.field('title',    'Primitive.String');
  node.field('status',   'TodoList.Entry.Status');
  node.field('children', 'TodoList.SQL.List<TodoList.Entry>', { joinOn: 'parent' });

};

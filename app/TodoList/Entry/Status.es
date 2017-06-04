/*!UroxGvT3uDMQCT1va20i43ZZSxo*/

export default function (node, logger) {

  node.kind('Record');

  node.inherit('TodoList.SQL.Enum');

  node.inherit('Record.MySQL');
  node.set('mysql.table', 'entries#status');
  node.set('mysql.cache', 3600000);

  node.on('knex-format', function (value) {
    return value.name;
  });

};

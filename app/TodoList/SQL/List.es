/*!UroxGvT3uDMQCT1va20i43ZZSxo*/
export default function (node, logger) {
  node.kind('Collection');
  node.inherit('Collection.MysqlList<' + this.args[0] + '>');
};

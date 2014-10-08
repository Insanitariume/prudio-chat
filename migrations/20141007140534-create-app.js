"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Apps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      account_id: {
        type: DataTypes.INTEGER,
        references: "Accounts",
        referencesKey: "id"
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: "Users",
        referencesKey: "id"
      },
      token: {
        type: DataTypes.UUID,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      online: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      xmpp_host: {
        type: DataTypes.STRING
      },
      xmpp_user: {
        type: DataTypes.STRING
      },
      xmpp_pass: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);

    migration.addIndex(
      'Apps',
      ['token'],
      {
        indexName: 'UniqueToken',
        indicesType: 'UNIQUE'
      }
    ).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Apps").done(done);
  }
};
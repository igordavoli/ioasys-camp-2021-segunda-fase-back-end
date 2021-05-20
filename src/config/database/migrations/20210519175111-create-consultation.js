'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('consultations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      professional_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "professionals", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      // address: {
      //   allowNull: false,
      //   type: Sequelize.UUID,
      //   references: { model: "professionals", key: "addresses.id" },
      //   onUpdate: "CASCADE",
      //   onDelete: "SET NULL",
      // },
      reason: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('consultations');
  }
};

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The field cannot be null"
            },
            isAlpha: {
                args: true,
                msg: "The name can only contain letters"
            },
            len: {
                args: [3, 255],
                msg: "The name must be between 3 and 255 characters"
            }
        },
    },
    
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                args: true,
                msg: "The field has to be a valid email"
            }
        }
    },
    
    age: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: {
                args: true,
                msg: "Age has to be a number"
            },
            min: {
                args: 1, 
                msg: "Age has to be greater than or equal to one"
            },
            max: {
                args: 150,
                msg: "Age has to be real"
            },
            esPar(value) {
                // 10 % 2 = 0 (false) 9 % 2 = 1 (true)
                if(value % 2) {
                    throw new Error("Age has to be an even number");
                }
            }
        }
    },

    role: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: "user",
    timestamps: false
});

module.exports = User;
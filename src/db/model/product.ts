import { Model, DataType, DataTypes } from "sequelize";
import connection from "../connection";


class Product extends Model {
    declare pk: number;
    declare id: string;
    declare name: string;
    declare category: string;
    declare unit_price: number;
    declare quantity: number;


    getTotalStockPrice() {
        return this.unit_price * this.quantity;
    }
}


Product.init(
    {
        pk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: {
            type: DataTypes.UUID,
            unique: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.ENUM,
            values: ['food', 'cloths', 'electronics', 'other']
        },
        unit_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    { sequelize: connection },
);


export default Product;
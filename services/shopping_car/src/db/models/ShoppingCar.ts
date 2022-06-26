import { Schema, model } from "mongoose";

const ShoppingCar = new Schema({
    user_id: {
        type: String,
        required: [true, "is required"]
    },
    total: {
        type: Number,
        default: 0
    },
    id_shopping_car: {
        type: String,
        unique: [true, "should be unique"],
        required: [true, "is required"]
    },
    active: {
        type: Boolean,
        require: [true, "is required"],
        default: true
    },
    items: {
        type: [{
            name: {
                type: String,
                required: [true, "is required"]
            },
            sku: {
                type: String,
                required: [true, "is required"]
            },
            cost: {
                type: String,
                required: [true, "is required"]
            },
            units: {
                type: Number,
                required: [true, "is required"],
                default: 1
            }
        }],
        default: []
    }
}, {
    timestamps: true
});

export default model("Shopping_Cars", ShoppingCar);
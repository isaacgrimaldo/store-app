import { Schema, model } from "mongoose";

const Order = new Schema({
    user_id: {
        type: String,
        required: [true, "is required"]
    },
    shopping_car: {
        type: {
            id_shopping_car: {
                type: String,
                required: [true, "is required"],
                unique: [true, "should be unique"]
            },

            total: {
                type: Number,
                default: 0
            },

            active: {
                type: Boolean,
                require: [true, "is required"],
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
                required: [true, "is required"],
            }

        }
    },

    status: {
        type: Boolean,
        required: [true, "is required"],
        default: true,
    },

    address: {
        colony: {
            type: String,
            require: [true, "is required"]
        },
        street: {
            type: String,
            require: [true, "is required"]
        },
        num: {
            type: String,
            require: [true, "is required"]
        }
    }

}, {
    timestamps: true,
    autoIndex: false,
});

export default model("Orders", Order);
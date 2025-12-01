package com.decroly.product_apirest.model;

public class Product {

    private String id;
    private String name;
    private String description;
    private String category;
    private String image;
    private String price;

    public Product(String id, String name, String description, String category, String image, String price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.image = image;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public String getImage() {
        return image;
    }

    public String getPrice() {
        return price;
    }
}

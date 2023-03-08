package com.cars.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="car_models")
public class Model {
    @Id
    @Column(name="id")
    private int id;
    @Column(name="header")
    private String header;
    @Column(name="brand")
    private String brand;
    @Column(name="model")
    private String model;
    @Column(name="type")
    private String type;
    @Column(name="gear_box")
    private String gear_box;
    @Column(name="engine_displacement")
    private String engine_displacement;
    @Column(name="mileage")
    private String mileage;
    @Column(name="price")
    private String price;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getHeader() {
        return header;
    }
    public void setHeader(String header) {
        this.header = header;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getGear_box() {
        return gear_box;
    }
    public void setGear_box(String gear_box) {
        this.gear_box = gear_box;
    }
    public String getEngine_displacement() {
        return engine_displacement;
    }
    public void setEngine_displacement(String engine_displacement) {
        this.engine_displacement = engine_displacement;
    }
    public String getMileage() {
        return mileage;
    }
    public void setMileage(String mileage) {
        this.mileage = mileage;
    }
    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }
    public Model(int id,String header,String brand,String model,String type,String gear_box,String engine_displacement,String mileage,String price){
        super();
		this.id=id;
        this.header=header;
		this.brand=brand;
		this.model=model;
		this.type=type;
		this.gear_box=gear_box;
		this.engine_displacement=engine_displacement;
		this.mileage=mileage;
		this.price=price;

    }
    public Model(){
        
    }
}


package com.example.demo.Entity;

public class Feedback {
	
	 private int id;
	 public Feedback(int id, String name, int cleanliness, int comfort, int service, int valueForMoney, String stay,
			String staff, String comments) {
		super();
		this.id = id;
		this.name = name;
		this.cleanliness = cleanliness;
		this.comfort = comfort;
		this.service = service;
		this.valueForMoney = valueForMoney;
		this.stay = stay;
		this.staff = staff;
		this.comments = comments;
	}
	private String name;
	 public Feedback() {
		
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCleanliness() {
		return cleanliness;
	}
	public void setCleanliness(int cleanliness) {
		this.cleanliness = cleanliness;
	}
	public int getComfort() {
		return comfort;
	}
	public void setComfort(int comfort) {
		this.comfort = comfort;
	}
	public int getService() {
		return service;
	}
	public void setService(int service) {
		this.service = service;
	}
	public int getValueForMoney() {
		return valueForMoney;
	}
	public void setValueForMoney(int valueForMoney) {
		this.valueForMoney = valueForMoney;
	}
	public String getStay() {
		return stay;
	}
	public void setStay(String stay) {
		this.stay = stay;
	}
	public String getStaff() {
		return staff;
	}
	public void setStaff(String staff) {
		this.staff = staff;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	private int cleanliness;
	    private int comfort;
	    private int service;
	    private int valueForMoney;
     private String stay;
     private String staff;
     private String comments;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
}

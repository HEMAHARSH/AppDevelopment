package com.example.demo.entity;





public class ContactUs {
	
	private int cid;
  private String firstname;
  private String lastname;
  private String moble;
  private String query;
public int getCid() {
	return cid;
}
public void setCid(int cid) {
	this.cid = cid;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getMoble() {
	return moble;
}
public void setMoble(String moble) {
	this.moble = moble;
}
public String getQuery() {
	return query;
}
public void setQuery(String query) {
	this.query = query;
}
public ContactUs(int cid, String firstname, String lastname, String moble, String query) {
	super();
	this.cid = cid;
	this.firstname = firstname;
	this.lastname = lastname;
	this.moble = moble;
	this.query = query;
}
public ContactUs()
{
	
}
}

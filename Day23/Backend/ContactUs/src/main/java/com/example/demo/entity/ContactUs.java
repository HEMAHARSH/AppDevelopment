package com.example.demo.entity;

public class ContactUs {

	private int cid;
	private String firstname;
	private String lastname;
	private String mobile;
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

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public ContactUs(int cid, String firstname, String lastname, String mobile, String query) {
		super();
		this.cid = cid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.mobile = mobile;
		this.query = query;
	}

	public ContactUs() {

	}
}


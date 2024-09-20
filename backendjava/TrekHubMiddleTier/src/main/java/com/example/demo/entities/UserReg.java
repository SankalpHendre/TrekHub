package com.example.demo.entities;

public class UserReg 
{
	int user_id,roleid;
	String uid,pwd,fname,lname,email,contact,adharno,gender,addressline;
	int pincode;
	
	public UserReg() 
	{
		super();
		
	}
	
	

	public UserReg(int user_id, String uid, String pwd, String fname, String lname, String email, String contact,
			String adharno, String gender, String addressline, int pincode) {
		super();
		this.user_id = user_id;
		this.uid = uid;
		this.pwd = pwd;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.adharno = adharno;
		this.gender = gender;
		this.addressline = addressline;
	
		this.pincode = pincode;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	

	public int getRoleid() {
		return roleid;
	}

	public void setRoleid(int roleid) {
		this.roleid = roleid;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAdharno() {
		return adharno;
	}

	public void setAdharno(String adharno) {
		this.adharno = adharno;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddressline() {
		return addressline;
	}

	public void setAddressline(String addressline) {
		this.addressline = addressline;
	}

	

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}



	@Override
	public String toString() {
		return "UserReg [user_id=" + user_id + ", roleid=" + roleid + ", uid=" + uid + ", pwd=" + pwd + ", fname="
				+ fname + ", lname=" + lname + ", email=" + email + ", contact=" + contact + ", adharno=" + adharno
				+ ", gender=" + gender + ", addressline=" + addressline + ", pincode=" + pincode + "]";
	}

	

	
	
	
	
	
}


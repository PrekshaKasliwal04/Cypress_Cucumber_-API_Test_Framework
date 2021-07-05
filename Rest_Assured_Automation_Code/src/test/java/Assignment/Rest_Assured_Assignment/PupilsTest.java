package Assignment.Rest_Assured_Assignment;

import org.json.JSONObject;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import test_utils.APIUtils;
import test_utils.TestProperties;

public class PupilsTest {
	JSONObject requestResponse = new JSONObject();	

	@BeforeMethod
	public RequestSpecification setEnvironment() {
		RestAssured.baseURI = TestProperties.getProperties("baseURL");
		RequestSpecification request =RestAssured.given();
	return request.body(requestResponse.toString());
	}
	
	@Test(description = "Verify POST without authentication code 401")
	public void verifyApiPostAthenticationErrorTest() {
		RequestSpecification request =	setEnvironment();
		requestResponse = APIUtils.newUserDetails();
		request.header("Content-Type", "application/json");
		request.body(requestResponse.toString());	
		Response response = request.post(TestProperties.getProperties("pupils"));
		Assert.assertEquals(response.getStatusCode(), 401);	
        String responseMessage = response.body().asString();
    	Assert.assertEquals(responseMessage.contains("Authorization header required"), true, "Error:Authentication failed non authorised user can assess"); 		
	}	
	
	@Test(description = "Verify POST should post new record with 201")
	public void verifyApiPostTest() {
		RequestSpecification request =RestAssured.given().contentType("application/json").auth().preemptive().basic(TestProperties.getProperties("username"), TestProperties.getProperties("password"));
		requestResponse = APIUtils.newUserDetails();
		request.body(requestResponse.toString());	
		Response response = request.post();
		Assert.assertEquals(response.getStatusCode(), 201);	
        String verification = response.body().asString();
    	Assert.assertEquals(verification.contains("pupilId"), true, "Response body does not contains pupilID"); 
		
	}	
	@Test(description = "Verify DELETE should delete given record with 204")
	public void verifyApiDeleteTest() {
		RequestSpecification request =RestAssured.given().contentType("application/json").auth().preemptive().basic(TestProperties.getProperties("username"), TestProperties.getProperties("password"));
		requestResponse = APIUtils.newUserDetails();
		request.body(requestResponse.toString());	
		Response response = request.post(TestProperties.getProperties("pupils"));
		Assert.assertEquals(response.getStatusCode(), 201);	
        String pupilID = response.jsonPath().get("pupilId");
        Response responseDelete = request.delete(pupilID);
		Assert.assertEquals(responseDelete.getStatusCode(), 204);
        }
	@Test(description = "Verify DELETE without pupilID test code 405")
	public void verifyApiDeleteErrorTest() {
		RequestSpecification request =RestAssured.given().contentType("application/json").auth().preemptive().basic(TestProperties.getProperties("username"), TestProperties.getProperties("password"));
		requestResponse = APIUtils.newUserDetails();
        Response responseDelete = request.delete();
		Assert.assertEquals(responseDelete.getStatusCode(), 405);
        }
	@Test(description = "Verify GET should return list of pupil records - 200")
	public void verifyApiGetTest() {
		RequestSpecification request =RestAssured.given().contentType("application/json").auth().preemptive().basic(TestProperties.getProperties("username"), TestProperties.getProperties("password"));
		Response response = request.get();
		Assert.assertEquals(response.getStatusCode(), 200);	
        String verification = response.body().asString();
        Assert.assertEquals(verification.contains(TestProperties.getProperties("pupils_heading")), true, "Response body does not contains Pupils");    	
	}
}

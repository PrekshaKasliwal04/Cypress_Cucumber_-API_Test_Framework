package test_utils;

import org.apache.commons.lang3.RandomStringUtils;
import org.json.JSONObject;

public class APIUtils {

	public static User getRandomUser() {
		String generatedString = RandomStringUtils.randomAlphabetic(6);
		String email = "Test" + generatedString + "@yopmail.com";
		String username = "Test" + generatedString;
		String password = generatedString;
		return new User(username, email, password);
	}

	public static User getRegisteredUser() {
		return new User(TestProperties.getProperties("userEmail"), TestProperties.getProperties("userPassword"));
	}

	public static JSONObject newUserDetails() {
		User user = APIUtils.getRandomUser();
		JSONObject requestParams = new JSONObject();

		requestParams.put("firstName", user.getUsername());		
		requestParams.put("infix", "");
		requestParams.put("lastName", "Last");		
		requestParams.put("classId", "12345");
		requestParams.put("gradeId", "12");
		requestParams.put("email", user.getEmail());
		requestParams.put("isDisabled", false);
		return requestParams;
	}
}

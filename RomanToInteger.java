import java.util.*;

class RomanToInteger {

  static int romanToInteger(String s) {
    int result = 0;

    for (int i = 0; i < s.length(); i++) {
      int currentVal = getRomanValue(s.charAt(i));
      if (i < s.length() - 1 && currentVal < getRomanValue(s.charAt(i + 1))) {
        result += currentVal * -1;
      } else {
        result += currentVal;
      }
    }
    return result;
  }

  private static int getRomanValue(char c) {
    switch (c) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        return 0;
    }
  }

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    String roman = sc.next();
    roman = roman.toUpperCase();
    System.out.println(romanToInteger(roman));

  }
}
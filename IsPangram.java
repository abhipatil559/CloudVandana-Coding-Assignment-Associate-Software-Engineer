import java.util.HashSet;
import java.util.Scanner;

public class IsPangram {
    public static void main(String[] args) {
        System.out.println("Enter String to check if it is Pangram : ");
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        boolean isPangram = checkPangram(input);

        if (isPangram) {
            System.out.println("The input string is a pangram.");
        } else {
            System.out.println("The input string is not a pangram.");
        }
    }
    public static boolean checkPangram(String input) {
        input = input.toLowerCase();
        HashSet<Character> uniqueLetters = new HashSet<>();

        for (char ch : input.toCharArray()) {
            if (Character.isLetter(ch)) {
                uniqueLetters.add(ch);
            }
        }
        // System.out.println(uniqueLetters);
        return uniqueLetters.size() == 26;
    }
}

import java.util.Scanner;

public class HJ2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s1 = in.nextLine();
        String s2 = in.nextLine();
        String upString1 = s1.toUpperCase();
        char upString2 = s2.toUpperCase().charAt(0);
        int count = 0;
        for (int i = 0; i < upString1.length(); i++) {
            if (upString1.charAt(i) == upString2) {
                count++;
            }
        }
        System.out.println(count);
    }
}
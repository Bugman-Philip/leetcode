import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class HJ3 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Set<Integer> set = new HashSet<Integer>();
        while (in.hasNextInt()) {
            int num = in.nextInt();
            set.add(num);
        }
        TreeSet<Integer> treeSet = new TreeSet<Integer>(set);
        treeSet.comparator();
        Iterator it = treeSet.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
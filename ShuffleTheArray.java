import java.util.Random;

class ShuffleTheArray {

  static void shuffle(int[] arr) {
    Random rnd = new Random();
    for (int i = arr.length - 1; i > 0; i--) {
      int randomElement = rnd.nextInt(i + 1);
      int temp = arr[i];
      arr[i] = arr[randomElement];
      arr[randomElement] = temp;
    }
  }
  public static void main(String[] args) {
    int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
    shuffle(arr);
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
  }
}
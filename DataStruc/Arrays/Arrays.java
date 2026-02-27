package DataStruc.Arrays;

import java.util.ArrayList;
import java.util.List;

public class Arrays {

    public static void main(String[] args) {
        int [] numOne = {1,3};
        int [] numTwo = {2};

        mergeSort(numOne, numTwo);
    }

    public static List<Integer> mergeSort(int [] arrOne, int [] arrTwo){
        List<Integer> merged = new ArrayList<>();
        int i = 0;
        int j = 0;

        while (i < arrOne.length && j < arrTwo.length) {
            if (arrOne[i] < arrTwo[j]) {
                merged.add(arrOne[i]);
                i++;
            } else {
                merged.add(arrTwo[j]);
                j++;
            }
        }

        while (i < arrOne.length) {
            merged.add(arrOne[i]);
            i++;
        }

        while (j < arrTwo.length) {
            merged.add(arrOne[j]);
            j++;
        }

        for (int num : merged) {
            System.out.println(num);
        }

        return merged;
    }
}
/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int left = 1,right =n;
        while(left<right){
            int middle = left + ((right-left)>>1);
            switch(guess(middle)){
                case 0:
                    return middle;
                case -1:
                    right = middle-1;
                    break;
                case 1:
                    left=middle+1;
                    break;
            }
        }
        return left;
    }
}
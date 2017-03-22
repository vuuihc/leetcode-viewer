public class Solution {
    public void wiggleSort(int[] nums) {
        double median = getMedian(nums);
        int n = nums.length,
                i = 0, j = 0, k = n - 1;
//        System.out.println("mid:" + median);
        while (j <= k) {
            if (nums[vi(j, n)] < median) {
//                System.out.println("before:"+Arrays.toString(nums));
//                System.out.println("move :"+vi(j,n)+"to"+vi(k,n));
                swap(nums, vi(j, n), vi(k--, n));
//                System.out.println("after:"+Arrays.toString(nums));
            } else if (nums[vi(j, n)] > median) {
//                System.out.println("before:"+Arrays.toString(nums));
//                System.out.println("move :"+vi(j,n)+"to"+vi(i,n));
                swap(nums, vi(i++, n), vi(j++, n));
//                System.out.println("after:"+Arrays.toString(nums));
            } else {
                j++;
            }
        }

    }

    public void swap(int[] data, int a, int b) {
        int temp = data[a];
        data[a] = data[b];
        data[b] = temp;
    }

    public int vi(int i, int n) {
        return (1 + 2 * i) % (n | 1);
    }

    public int getMax(int[] nums) {
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }
        }
        return max;
    }

    public int getMin(int[] nums) {
        int min = Integer.MAX_VALUE;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }
        return min;
    }

    public double getMedian(int[] nums) {
        int max = getMax(nums), min = getMin(nums);
        int[] a = new int[max - min + 1];
        for (int i = 0; i < nums.length; i++) {
            a[nums[i] - min]++;
        }
        int count = 0;
//        System.out.println(Arrays.toString(a));
        double halfLenght = nums.length / 2;
        for (int i = 0; i < a.length; i++) {
            if (count < halfLenght && count + a[i] > halfLenght) {
                return i + min + 0.0;
            } else if (count + a[i] == halfLenght) {
                if (nums.length % 2 == 1) {
                    return i + min + 1.0;
                } else {
                    return i + min + 0.5;
                }
            }
            count += a[i];
        }
        return 0;
    }

}
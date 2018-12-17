public class Queens {
    public static void main(String args[]) {
        int num = 8;
        int[][] board = new int[num][num];
        solve(0, board, num);
        for(int i = 0; i < num; i++) {
            for(int j = 0; j < num; j++) {
                if(board[i][j]==1) System.out.print("Q ");
                else System.out.print("* ");
            }
            System.out.println();
        }
    }

    static boolean solve(int row, int[][] board, int num) {
        if(row>=num) return true;
        for(int p= 0; p< num; p++) {
            if(isValid(board, row, p, num)) {
                board[row][p] = 1;
                if(!solve(row+1, board, num)) {
                    board[row][p] = 0;
                } else
                    return true;
            }
        }
        return false;
    }

    static boolean isValid(int[][] board, int x, int y, int num) {
        int i, j;
        for(i = 0; i < x; i++)
            if(board[i][y]==1)
                return false;
        i = x - 1;
        j = y - 1;
        while((i>=0)&&(j>=0))
            if(board[i--][j--]==1) return false;
        i = x - 1;
        j = y + 1;
        while((i>=0)&&(j<num))
            if(board[i--][j++]==1) return false;
        return true;
    }
}

#include <stdio.h>
    main()
    
    {
        int a = 1;
        int b = a;
        a+=++b+a+++b+a++;
        
        
        
        printf("十进制整形%d",a);
        //printf("十进制长整形%ld",a);
        //printf("字符串%s",a);
        printf("字符型%c",a);
        //printf("浮点型%f",a);
    }
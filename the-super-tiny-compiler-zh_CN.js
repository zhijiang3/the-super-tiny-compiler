'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 今天我们将一起编写一个编译器。但不仅限于任何编译器...这是一个超级傻瓜式微型编译器!
 * 一个非常小的编译器，如果你删除所有注释，此文件实际上只有 200 行左右的代码。
 *
 * 我们将把一些类似 LISP(计算机程序设计语言) 的函数调用编译成一些类似 C 函数调用。
 *
 * 如果你不熟悉其中之一，我会简单的给你介绍一下。
 *
 * 如果我们有两个函数 `add` 和 `subtract` 它们的写法如下：
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 相当的简单对吧？
 *
 * 很好，因为这正是我们需要编译的内容。虽然这些既不是完整的 LISP(计算机程序设计语言)
 * 语法，也不是完整的 C 语法，但对于现代编译器的许多主要部分来说已经足够。
 */

/**
 * 大多数编译器分为三个主要阶段：解析，转化 和 代码生成
 *
 * 1. *解析* 是将原始代码转换为更抽象的代码表示形式。
 *
 * 2 *转化* 获取抽象代码的表示形式并进行操作以执行编译器希望它执行的任何操作。
 *
 * 3. *代码生成* 将转换后的抽象代码转换为新代码
 */

/**
 * 解析
 * ----
 *
 * 解析通常分为两个阶段：词法解析 和 语法解析。
 *
 * 1. *词法解析* 获取原始代码并通过被称作分词器（或词法分析程序）的东西
 *    将其拆分为被称作令牌的东西。
 * 
 *    令牌是由微小的对象组成的数组，这些对象描述了一个独立的语法片段。它们
 *    可以是数字，标签，标点符号，运算符等等。
 *
 * 2. *语法分析* 获取令牌并将令牌重新格式化为一种表示形式，该表示形式描述
 *    了语法的每个部分及其彼此之间的关系。这就是所谓的中间表示或抽象语法
 *    树。
 *
 *    抽象语法树，简称 AST，是一个嵌套很深的对象，它以一种既易于使用又能
 *    告诉我们很多信息的方式表示代码。
 *
 * 对于以下语法：
 *
 *   (add 2 (subtract 4 2))
 *
 * 令牌看起来可能是这样的：
 * 
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 然后抽象语法树看起来可能是这样的：
 * 
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 转换
 * ----
 *
 * 编译器的下一个阶段是转换。同样，这只是从最后一步获取抽象语法树并对其进行更改。
 * 它可以使用相同的语言来操作抽象语法，也可以将其转换成一个全新的语言。
 *
 * 让我们看看如何转换抽象语法树。
 *
 * 你可能会注意到，我们的抽象语法树的元素看起来非常的相似。这些对象具有 类型（type） 属性。
 * 这些都称为抽象语法树的 节点（node）。这些节点上定义了描述树的一个独立部分的属性。
 *
 * 我们可以有一个 "NumberLiteral" 节点：
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 或者一个 "CallExpression" 节点：
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * 在转换抽象语法树时，我们可以通过添加/删除/替换属性来操作节点，我们可以
 * 添加节点，删除节点，也可以不使用现有的抽象语法树，而基于它创建一个全新的。
 *
 * 因为我们的目标是一门新的语言，所以我们专注于创建一个特定于目标语言的全新抽象语法树。
 *
 * 遍历
 * ----
 *
 * 为了浏览到所有的节点，我们需要能够遍历它们。这个遍历程序通过深度优先（depth-first）去遍历每一个节点。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 对于上述抽象语法树的遍历方式如下：
 *
 *   1. Program - 从抽象语法树的顶层开始
 *   2. CallExpression (add) - 移动到 Program 的主体的第一个元素上
 *   3. NumberLiteral (2) - 移动到 CallExpression (add) 的参数的第一个元素上
 *   4. CallExpression (subtract) - 移动到 CallExpression (add) 的参数的第二个元素上
 *   5. NumberLiteral (4) - 移动到 CallExpression (subtract) 的参数的第一个元素上
 *   6. NumberLiteral (2) - 移动到 CallExpression (subtract) 的参数的第二个元素上
 *
 * 如果我们直接操作抽象语法树，而不是创建单独的抽象语法树，则可能会在此引入各种的抽象。
 * 但是，只需要访问树中的节点就可以完成我们要执行的操作。
 *
 * 这里我之所以使用 “访问（visiting）” 这个词，是因为存在这样一种模式来表示对象结构元素上的操作。
 *
 * 访问者
 * ------
 *
 * 这里的基本思想是，我们将创建一个 “访问者（visitor）” 对象，该对象的方法将接受不同的节点类型。
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 在遍历我们的抽象语法树时，每当我们 “进入（enter）” 到一个类型匹配的节点，就会调用访问者中对应的方法。
 *
 * 为了使访问者能用，我们还将传递该节点和对父节点的引用。
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 但是，也会有在离开节点时做一些事情。想象一下之前以列表形式的树结构。
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 当我们向下遍历时，我们会到达有死胡同的分支。完成树的分支后，我们 “离开（exit）” 它。
 * 因此，沿着树向下，我们 “进入（enter）” 每个节点，然后返回上一级，“离开（exit）” 节点。
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 为了支持这个功能，最终我们的访问者看起来应该像这样：
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成
 * --------
 *
 * 编译器的最后一个阶段就是代码生成。有时候编译器会做一些与转换重叠的事情，但是
 * 大多数情况下代码生成只是把我们的抽象语法树字符化然后返回。
 *
 * 代码生成有好几种工作方式，有些编译器会重新使用早期的令牌，另一些编译器将创建代码
 * 的单独表示，以便它们可以线性输出节点。但是据我所知，大多数编译器是使用像我们创建
 * 的抽象语法树去生成代码，这个正是我们需要去关注的。
 *
 * 实际上，我们的代码生成器知道如何 “打印” 抽象语法树所有不同类型的节点，
 * 并且编译器会递归的调用自身去打印嵌套的节点，直到所有内容都打印到一个
 * 长串代码中。
 */

/**
 * 就是这样！这些就是编译器所有的不同部分。
 *
 * 这并不是说每个编译器都和我在这里描述的完全一样。编译器有许多不同的用途，
 * 并且可能会比我详细介绍的步骤还要多更多的步骤。
 *
 * 但是现在你应该对大多数编译器有了大致的了解。
 *
 * 现在我解释了所有的这些，你们都准备好编写你们自己的编译器了，对吗？
 *
 * 开玩笑的，这就是我在这提供帮助的点 :P
 *
 * 所以让我们开始吧...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                 词法分析器!
 * ============================================================================
 */

/**
 * 我们将要开始我们的第一阶段的解析，使用词法解析其进行词法解析。
 *
 * 我们只需要把我们的代码字符串分解成一个令牌数组。
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 我们首先接受一个输入字符串的代码，然后我们会设置两个东西
function tokenizer(input) {

  // 一个 `current` 变量，用于像指针一样跟踪我们在代码中的位置。
  let current = 0;

  // 以及一个 `tokens` 数组，存放我们收集的令牌。
  let tokens = [];

  // 我们首先创建一个 `while` 循环，将我们的 `current` 变量在该循环中自增。
  //
  // 我们这样做是因为我们可能希望在一个循环中多次增加 `current`，因为我们的令牌
  // 可以是任意长度的。
  while (current < input.length) {

    // 我们也存储 `current` 所指向的 `input` 对应的字符串。
    let char = input[current];

    // 首先要检查的是开括号。这将用于 `CallExpression` 但是现在我们只关心字符串。
    //
    // 我们检查看看是否有开括号：
    if (char === '(') {

      // 如果有，我们添加一个类型为 `paren` 的令牌，并将其值设置为开括号。
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // 自增 `current`
      current++;

      // 然后我们进入下一个循环。
      continue;
    }

    // 下一步我们检查闭括号。我们和之前做的事情一样：检查是否是闭括号，然后
    // 添加一个新的令牌，自增 `current` 然后进行下一个循环。
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 继续，我们现在要检查空白符。这挺有意思的，因为我们关心空白符是否存在以分隔字符，
    // 但实际上对于我们的令牌来说这并不重要。我们在之后会丢弃它。
    //
    // 所以我们在这里将检查是否存在空白符，如果存在的话我们就进入下一个循环。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 令牌的下一个类型是数字。这和我们之前的处理方式不太一样，因为数字可以是任意
    // 数量的字符，我们希望将整个字符序列捕获为一个令牌。
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        只有两个不同的令牌
    //
    // 所以当我们遇到第一个数字序列时，我们就从第一个数字开始。
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // 我们创建一个 `value` 字符串然后把遇到的数字添加到这个字符串中。
      let value = '';

      // 然后我们将循环遍历序列中的每一个字符，直到遇到一个不是数字的字符，将
      // 每个数字字符添加到我们的 `value` 中，并在此过程自增 `current`
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 之后我们添加我们的 `number` 令牌到我们的 `tokens` 数组中。
      tokens.push({ type: 'number', value });

      // 然后我们进入下一个循环。
      continue;
    }

    // 我们还将在我们的语言中添加对字符串的支持，它将是任何被双引号包围的文本。
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ 字符串令牌
    //
    // 我们将从检查开头的引号开始：
    if (char === '"') {
      // 保留一个 `value` 变量来构建我们的字符串令牌。
      let value = '';

      // 我们跳过令牌开头的双引号。
      char = input[++current];

      // 我们迭代遍历每一个字符直到遇到另一个双引号。
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // 跳过结尾的双引号。
      char = input[++current];

      // 之后我们添加我们的 `string` 令牌到我们的 `tokens` 数组中。
      tokens.push({ type: 'string', value });

      continue;
    }

    // 最后一种令牌类型是 `名称（name）` 令牌。这是一个字母序列，而不是数字序列，
    // 这是我们 LISP 语法中的函数名称。
    //
    //   (add 2 4)
    //    ^^^
    //    名称令牌
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // 同样的我们遍历所有的字母并把它添加到我们的 value 变量中。
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 然后将该值作为 `name` 类型添加到令牌数组中并继续。
      tokens.push({ type: 'name', value });

      continue;
    }

    // 最后，如果我们现在还有没匹配的字符，我们将抛出一个错误并完全退出。
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // 在`词法分析器`的最后，我们简单的返回令牌数组。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                 语法解析器!!!
 * ============================================================================
 */

/**
 * 对于我们的解析器，我们将把令牌数组转换成抽象语法树（AST）。
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 所以我们定义一个 `parser` 函数来接受我们的 `tokens` 数组。
function parser(tokens) {

  // 同样的我们保留一个 `current` 变量，将其用作指针。
  let current = 0;

  // 不过这一次我们使用递归替代 `while` 循环。所以我们定义了一个 `walk` 函数。
  function walk() {

    // 在 walk 函数内我们获取 `current` 指向的令牌。
    let token = tokens[current];

    // 我们将从 `number` 令牌开始，把每种类型的令牌拆分为不同的代码路径。
    //
    // 我们测试看看是否有一个 `number` 令牌。
    if (token.type === 'number') {

      // 如果我们有，我们先自增 `current`。
      current++;

      // 然后我们返回一个类型为 `NumberLiteral` 的新AST节点，并且把它的值设置为令牌的值。
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 如果我们有一个字符串，我们和 number 一样创建一个 `StringLiteral` 节点。
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 接下来我们去寻找 CallExpression。从我们遇到左括号开始。
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // 我们自增 `current` 去跳过括号这部分，因为在 AST 中我们不需要关心这个。
      token = tokens[++current];

      // 我们创建了一个类型为 `CallExpression` 的基本节点，然后我们把令牌的值
      // 设置到 name 字段中，因为括号后紧跟的就是调用函数的名称。
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // 我们*再一次*自增 `current` 去跳过函数名称这个令牌。
      token = tokens[++current];

      // 然后我们需要通过循环接下来的每一个令牌，这些令牌将是 `CallExpression`
      // 的 `params` 字段，直到我们遇到了闭括号为止。
      // 
      // 现在正是递归的用武之地。我们应该使用递归去解决这些问题，而不是试图去解析
      // 可能无限嵌套的节点集。
      //
      // 为了解释这个，让我们以 LISP 代码为例。你可以看到 `add` 方法的参数是一个数字
      // 和一个嵌套的 `CallExpression` 这个 `CallExpression` 包含了自己的数字
      //
      //   (add 2 (subtract 4 2))
      //
      // 你同样会注意到我们的令牌数组中有有多个闭括号。
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // 我们将依赖嵌套的 `walk` 方法去自增我们的 `current` 变量去处理所有嵌套的 `CallExpression`

      // 所以我们创建一个 `while` 循环，一直循环直到遇到了一个 `type` 为 `paren` 并且值为闭括号的令牌。
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // 我们调用 `walk` 方法，它会返回一个 `node`，然后我们把返回的节点
        // 添加到我们的 `node.params` 中。
        node.params.push(walk());
        token = tokens[current];
      }

      // 最后我们再一次自增 `current` 去跳过闭括号。
      current++;

      // 然后返回这个节点。
      return node;
    }

    // 同样，如果我们到这一步还有没有识别出令牌类型，我们将抛出一个错误。
    throw new TypeError(token.type);
  }

  // 现在，我们将创建我们的 AST，它的根节点是一个 `Program` 节点。
  let ast = {
    type: 'Program',
    body: [],
  };

  // 然后我们运行我们的 `walk` 方法，添加节点进我们的 `ast.body` 数组。
  //
  // 我们在这里做一个循环的原因是，我们的程序可以是多行的 `CallExpression` ，不一定是嵌套的。
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // 在我们的解析器最后，返回抽象语法树。
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                                      遍历!!!
 * ============================================================================
 */

/**
 * 现在我们有了 AST，我们希望访问器能够访问不同类型的节点。我们需要能够在遇到类型匹配的
 * 节点时调用访问器上的方法。
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// 所以我们定义一个遍历函数，接收一个 AST 和一个 访问器。在函数里我们将定义两个
// 函数...
function traverser(ast, visitor) {

  // 一个 `traverseArray` 函数，它允许我们遍历一个数组并调用下一个定义的函数：
  // `traverseNode`。
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` 接收一个节点 `node` 和这个节点的父引用 `parent`。这样
  // 它就可以同时把这两个参数传递给我们访问器里的方法。
  function traverseNode(node, parent) {

    // 我们首先测试在访问者上是否存在一个匹配的 `类型 (type)`。
    let methods = visitor[node.type];

    // 如果这个节点类型有定义 `进入 (enter)` 方法，我们将以 `node` 和 `parent`
    // 作为参数调用这个方法。
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // 接下来，我们将根据当前节点类型来拆分内容。
    switch (node.type) {

      // 我们将从最顶层的 `程序 (Program)` 开始。因为程序节点有一个 body 属性，
      // 是一个数组，所以我们调用 `traverseArray` 来遍历它们。
      //
      // (记住，这个 `traverseArray` 将会依次调用 `traverseNode` 所以
      // 这个树将会被递归的遍历)
      case 'Program':
        traverseArray(node.body, node);
        break;

      // 下一步我们对 `CallExpression` 执行与上面相同的操作，遍历它的 `params`。
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // 在 `NumberLiteral` 和 `StringLiteral` 的情况下，我们没有任何要访问的
      // 子节点，所以我们直接中断。
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // 又一次，如果我们还有未识别的节点类型，我们抛出一个错误
      default:
        throw new TypeError(node.type);
    }

    // 如果这个节点类型有定义 `离开 (exit)` 方法，我们将以 `node` 和 `parent`
    // 作为参数调用这个方法。
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 最后，我们通过调用 `traverseNode` 来启动我们的遍历器，因为这里的 ast 是
  // 最顶层的元素，没有父元素，所以 `parent` 参数我们传一个空值。
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                                    转换器!!!
 * ============================================================================
 */

/**
 * 接下来是转换器。我们的转换器将拿我们构建的 AST 和一个访问者（visitor）一起
 * 传递给我们的遍历函数，它将会创建一个全新的 AST。
 *
 * ----------------------------------------------------------------------------
 *   原始的 AST                       |   转换后的 AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *      (抱歉，另一个更长一些。)        |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// 所以我们有了转换函数，接收 LISP 的抽象语法树。
function transformer(ast) {

  // 我们创建一个 `newAst` 它和之前的抽象语法树一样有一个程序节点。
  let newAst = {
    type: 'Program',
    body: [],
  };

  // 接下来，我们要使用些技巧。我们将在父节点上使用一个名为 `context` 的属性，
  // 并将节点添加到父节点的 `context` 中。通常情况下会让这个变得更抽象，但是
  // 对于我们的目的来说，这会让事情更简单。
  //
  // 注意，这里的上下文是旧的 AST 对新的 AST 的引用。
  ast._context = newAst.body;

  // 我们开始调用遍历函数，并传入我们的 AST 和访问者。
  traverser(ast, {

    // 第一个访问者方法接受任何的 `NumberLiteral`
    NumberLiteral: {
      // 我们在节点进入时访问它
      enter(node, parent) {
        // 我们将创建一个叫 `NumberLiteral` 的新节点，并将它会添加到父节点的上下文中。
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // 下一个是 `StringLiteral`
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // 接下来是 `CallExpression`
    CallExpression: {
      enter(node, parent) {

        // We start creating a new node `CallExpression` with a nested
        // `Identifier`.
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // Next we're going to define a new context on the original
        // `CallExpression` node that will reference the `expression`'s arguments
        // so that we can push arguments.
        node._context = expression.arguments;

        // Then we're going to check if the parent node is a `CallExpression`.
        // If it is not...
        if (parent.type !== 'CallExpression') {

          // We're going to wrap our `CallExpression` node with an
          // `ExpressionStatement`. We do this because the top level
          // `CallExpression` in JavaScript are actually statements.
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
        // `context`.
        parent._context.push(expression);
      },
    }
  });

  // 在转换器的最后，我们将返回刚刚创建的新 AST。
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * Now let's move onto our last phase: The Code Generator.
 *
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 */

function codeGenerator(node) {

  // We'll break things down by the `type` of the `node`.
  switch (node.type) {

    // If we have a `Program` node. We will map through each node in the `body`
    // and run them through the code generator and join them with a newline.
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // For `ExpressionStatement` we'll call the code generator on the nested
    // expression and we'll add a semicolon...
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way)
      );

    // For `CallExpression` we will print the `callee`, add an open
    // parenthesis, we'll map through each node in the `arguments` array and run
    // them through the code generator, joining them with a comma, and then
    // we'll add a closing parenthesis.
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // For `Identifier` we'll just return the `node`'s name.
    case 'Identifier':
      return node.name;

    // For `NumberLiteral` we'll just return the `node`'s value.
    case 'NumberLiteral':
      return node.value;

    // For `StringLiteral` we'll add quotations around the `node`'s value.
    case 'StringLiteral':
      return '"' + node.value + '"';

    // And if we haven't recognized the node, we'll throw an error.
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                            !!!!!!!!编译器!!!!!!!!
 * ============================================================================
 */

/**
 * 终于！我们创建了我们 `compiler` 函数。这里我们将管道的每个部分连接起来。
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // 然后简单的返回输出！
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!你做到了!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// 现在，我们把所有东西都导出去...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
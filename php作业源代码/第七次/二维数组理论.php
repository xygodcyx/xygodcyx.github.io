<?php
// 、创建一个二维数组$arr2， '春季'=> ('3月', '4月','5月'), '夏季' => ('6月', '7月', '8月'),
// '秋季'=>('9月', '10月', '11月'), '冬季'=>('12月', '1月', '2月')。


// （1）输出$arr2的key为'秋季'的第2个元素。
// （2）输出$arr2的所有元素个数。
$arr2 = [
    '春季' => array('3月', '4月', '5月'), '夏季' => array('6月', '7月', '8月'),
    '秋季' => array('9月', '10月', '11月'), '冬季' => array('12月', '1月', '2月')
];
var_dump($arr2["秋季"][1]);
$count = 0;
foreach ($arr2 as $key => $val) {
    $count += count($arr2[$key]);
}
echo $count + count($arr2);

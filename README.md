# 1 페이지에 들어가야함

## 전체 단원
1.  Abstractions
1.  Marks and Channels
1.  Interactive Views
1.  Multivariable Tables
1.  Maps
1.  Color
1.  Aggregation
1.  Networks
1.  Rules of Thumb

# 속성(Attribute)들의 3가지 종류
## Categoriacal attribute
### 종류1: Categorical attribute
* 절대적인(implicit) 순서가 없는 데이터이다.
* 종종 계층적인 구조를 갖을수 있다.
* 카테고리들은 2가지가 같은지 다른지만 구별할 수 있다.
    * 예: 둘다 같은 사과인가? 한개는 오렌지이고 나머지는 사과인가?
* 외부적(external)으로 부여한 순서는 존재할 수 있다.
    * 예: 알파벳 순서대로 과일을 정렬한다.
* 예: 영화 장르, 파일 확장자, 도시 이름, 과일 이름, 동물의 종, 도로 이름, 자동차 모델, 치즈의 종류, 눈의 색깔, 사람 이름, 책의 ISBN, 스타벅스 음료의 크기(Grande, Venti)

## Ordered attribute
* Ordered attribute은 절대적인(implicit) 순서가 있는 데이터이다.
### 종류2: Ordinal attribute
* 숫자적으로 비교와 연산(덧셈, 뺄셈)은 불가능 하지만, 비교가 가능한 순서가 있는 데이터이다.
* 구체적인 단위가 없다.
* 예: 옷의 사이즈(S,M,L), 영화 10순위, **영화 평점**, 은행 대기번호, 계란의 크기(중란, 왕란), 운동선수의 체급, ABCDF로 나타낸 성적, 공룡의 종, 학번, 자동차등록번호, 음료의 이름

### 종류3: Quantitative attribute
* 숫자적으로 비교와 연산(덧셈, 뺄셈)이 가능한 순서가 있는 데이터이다.
* 구체적인 단위가 있다.
* 예: 키(cm), 몸무게(kg), 온도(°C), 주가, 날짜, 버스가 회차하는 횟수(번), 태풍이 2021년도에 일어난 횟수(번), 이빨의 갯수(개), 타이어 공기압(psi), 실업률(%), 요트의 길이(미터), 사람의 평균 몸무게(kg), 뜨거운 물의 온도(°C)

## Data type
* Data: 정보들의 sequence (테이블에서 1개의 row)
* Semantics: 각 데이터가 상징하는 의미
* Data type: 데이터의 구조적 또는 수학적 해석(종류: item, attribute, link, position, grid)
    * Item: 테이블에서 1개의 row가 상징하는 것(예: 자동차, 도시, 사람, 주식)
    * Attribute: 테이블에서 column(예: 테이블에서 이름, 나이, 길이)
    * link: 같은 테이블에서 2개 이상의 item 사이의 상관 관계
    * position: 공간적 데이터(예: x,y 좌표, 사진에서 pixel의 개수)
    * grid: 연속적인 데이터에서 샘플 추출의 하는 방식
* 3가지 Dataset types
![Dataset types](./cheat%20sheat%20src/Dataset%20types.png)
    * flat table
        * ![flat table](./cheat%20sheat%20src/flat%20table.png)
        * 1개의 row에 1개의 item이 있다.
        * 각 column은 attribute이다.
        * 각 cell이 item-attribute 짝의 값을 보관한다.
        * 종종 1부터 시작하는 unique 키가 있다.
    * Multidimensional table
    ![multidimensional table](./cheat%20sheat%20src/multidimensional%20table.png)
        * 인덱스로 구성된 여러개의 key를 사용한다.
    * Network(graph)
    ![network](./cheat%20sheat%20src/network.png)
        * 노드들이 링크로 연결 되어있다.
        * Tree는 cycle이 존재 하지 않는 network(graph)이다.
    * Spatial Data
        * Field
            * 각 셀은 연속적인 범위에서 값을 가지고 있다.
        * Geometry
            * item의 모양
            * 공간적 위치
    * Collection
        * 집합(순서가 없는 특정 items)
        * 리스트
        * cluster


## View Coordination
### Small Multiples coordination
![small multiples coordination](./cheat%20sheat%20src/Small%20multiples%20coordination.png)
* 여러 개의 작은 그래프(또는 그림)를 하나의 화면에 배열하여 여러 변수 간의 비교와 관계를 시각적으로 표현합니다.
* 기본적으로 small multiples coordination은 동일한 종류의 그래프를 사용하며, 각각의 그래프는 데이터의 서로 다른 부분집합을 나타냅니다.


### Multiform coordination
![Multiform coordination1](./cheat%20sheat%20src/Multiform%20coordination1.png)
![Multiform coordination2](./cheat%20sheat%20src/Multiform%20coordination2.png)
* 다양한 형식의 정보를 조합하여 효과적으로 전달하는 커뮤니케이션 기법입니다.
* 이 기법은 다양한 매체와 형식을 이용하여 메시지를 전달함으로써 수신자에게 다양한 차원에서 정보를 제공하고 이해를 촉진합니다.
* 글, 그림, 도표, 다이어그램, 그래픽, 사진, 영상, 음성 등 다양한 매체와 형식을 활용할 수 있습니다.

### Overview/Detail multiform coordination
![Overview/Detail multiform coordination](./cheat%20sheat%20src/Overview-detail%20multiform.png)
* 정보를 전달하는 데에 있어서 전반적인 개요와 세부사항을 조화롭게 조합하여 효과적으로 전달하는 커뮤니케이션 기법입니다.
* 주로 개요는 간결하고 요약된 형태로 제시되며, 세부사항은 더 깊고 구체적인 형태로 제시됩니다. 

### Overview/Detail same form coordination
![Overview/Detail same form coordination](./cheat%20sheat%20src/Overview%3ADetail%20same%20form%20coordination.png)
* 정보를 동일한 형식 내에서 전반적인 개요와 세부사항을 효과적으로 조합하여 전달하는 커뮤니케이션 기법입니다.
* 이 기법은 동일한 형식을 유지하면서 요약된 개요와 더 자세한 세부사항을 포함하여 정보를 전달함으로써 수신자의 이해와 파악을 돕습니다.

## Mark
* 이미지안에 있는 그래픽 요소를 마크라고 합니다.
* Mark는 데이터 시각화의 기본 단위로 사용되며, 데이터의 특성과 시각적 인코딩을 결정하는 데 중요한 역할을 합니다.
* Mark는 점, 선, 면적, 부피의 형태를 가질 수 있습니다.
예를 들어, 데이터 시각화에서 원은 하나의 점을 나타내는 Mark로 사용될 수 있고, 선은 데이터의 경로나 추세를 시각화하는 데 사용될 수 있습니다.
* Mark는 (시각적) 채널을 통해 데이터의 속성을 인코딩합니다. 위치, 길이, 면적, 색상, 질량, 텍스처 등의 시각적 채널을 사용하여 Mark의 특성을 나타내고 데이터 값을 시각적으로 전달합니다.
* 예를 들어, 점의 위치를 이용하여 데이터의 값을 x축과 y축에 매핑하고, 색상을 이용하여 범주를 구분할 수 있습니다.

### Mark의 종류
![Mark types](./cheat%20sheat%20src/Mark%20types.png)

Point mark
Line mark
Interlocking area

## Channel
* 시각적인 정보를 전달하기 위해 사용되는 시각적 요소를 가리키는 용어입니다. 
### Channel의 종류
![Channel types](./cheat%20sheat%20src/Channel%20types.png)
* 위치 (spatial, horizontal, vertical position): 데이터를 점, 선, 영역 등의 위치로 표현하는 것으로, 가장 기본적이고 강력한 시각적 채널입니다. X축, Y축 등을 통해 데이터 값을 위치로 매핑하여 시각화합니다.
* 길이 (Length): 선의 길이를 사용하여 데이터의 크기 또는 정도를 표현합니다. 예를 들어, 막대 그래프에서 막대의 길이는 데이터의 상대적인 크기를 나타낼 수 있습니다.
* 면적 (Area): 영역의 크기를 사용하여 데이터 값을 표현합니다. 원의 크기나 영역 그래프의 면적 등을 이용하여 데이터를 시각화할 수 있습니다.
* 색상 (Color(hue, saturation)): 색상을 사용하여 데이터를 구분하거나 특정 값을 표현합니다. 서로 다른 색상을 사용하여 범주를 나타내거나 연속적인 값에 따라 색상을 변화시킬 수 있습니다.
* 질량 (Magnitude): 점, 막대 또는 도형의 크기를 사용하여 데이터의 크기 또는 양을 나타냅니다. 크기가 다른 점이나 도형을 사용하여 데이터를 시각화할 수 있습니다.
* 텍스처 (Texture): 텍스처를 사용하여 데이터를 표현하는 것으로, 패턴이나 질감을 이용하여 데이터를 시각화할 수 있습니다.
* 밝기 (Brightness): 색상의 밝기를 사용하여 데이터를 표현합니다. 색조와 명도를 조절하여 데이터의 차이를 나타낼 수 있습니다.

# Material de apoio curso Posicionando elementos com Flaxbos em CSS
## Flex Container

- Display: flex;
  - Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flx items.
    - A propriedade de flex pode ser aplicada em qualquer tag HTML
    - Container 
    - item
- Flex-direction
  - É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container.
    - Eixos
      - LInhas
      - Horizontal
          - row(padrão): à direção do texo, esquerda para direita
          - row-reverse: sentido oposto à direção do texto
          - columm: Ordenação de cima pra baixo, em coluna unica
          - column-reverse: ordenação inversa, de baixo para cima
- Flex-wrap
  - É a propriedade que define se os itens devem ou não quebrar a linha
  - Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados além do limite do conteúdo.
  - nowrap: 
    - É o padrão, não permite a quebra de linha
  - wrap:
    -  Premite a quebra de linha assim que um dos flex itens não puder mais ser compactado.
  - wrap-reverse:
    - Permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porém na direção contrária da linha, acima.
  
- Flex-flow
  - É um atalho para as propriedades flex-direction e flex-wrap.
  - Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wradp que é nowrap.
  
- Justify content
  - Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com o a direção pretendida e tratar da distribuição de espaçamento entre eles.
  - OBS: Caso seus itens esteja ocupando 100% de todo o container, ela não se aplica. 
    - flex-start: iníco do container
    - flex-end: final do container
    - cener: ao centro do container
    - space-between: cria um espaçamento igual entre os elementos.
    - space-around: os espaçamentos do meio são duas vezes maior que o inicial e o final
  
- Align items
  - Trata do alinhmaneo dos flex itens de acordo com o eixo do container
  - O alinhamento é diferente para quando os itens estão em colunas ou linhas.
  - Permite o alinhamneto central no eixo vertical.
  - Não precisa ter conhecimento das alturas dos itens filhos do contain. 
    - Tipos de alinhamneots
      - Center : Alinhamento dos itens ao centro
      - stretch: padrão, e os flex itens cresçam igualmente
      - flex-start: alinhamento dos itens no início
      - flex-end: alinhamento fos intes no final
      - baseline: alinhamento de acorod com a linha base da tipografia dos itens
  
- Align Content
  - É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container
  - Precisamos que:
    - O container utilize quevra de linhas
    - A altura do container seja maior que a soma das linhas dos itens
    - Tipos de alinhamento
      - Center:alinhamento dos itens ao centro
      - stretch: é o padrão e os flex itens crescem igualmente
      - flex-start: alinhamento dos itens no início
      - flex-end: alinhamento dos itens no final
      - space-between: cria um espaçamento igual entre os elementos
      - space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final
    - 
  
We wish to explain each of the major ML models in an comparative fasion. 
I) OLS vs Ridge :
To build **deep mathematical intuition**, we derive the **closed-form solution** for both **Ordinary Least Squares (OLS)** and **Ridge Regression** starting from their **cost functions**.

The key idea is:

> We minimize the cost function by taking derivatives with respect to the weight vector (w).

---

# 1️⃣ Ordinary Least Squares (OLS)

## Step 1 — Model definition

Linear regression model:

[
y = Xw + \epsilon
]

where

* (X \in \mathbb{R}^{m \times p}) → feature matrix
* (w \in \mathbb{R}^{p \times 1}) → weight vector
* (y \in \mathbb{R}^{m \times 1}) → target
* (m) → number of samples
* (p) → number of features

Prediction:

[
\hat y = Xw
]

---

# Step 2 — OLS Cost Function

OLS minimizes **Mean Squared Error**

[
J(w) = \frac{1}{2}(y - Xw)^T(y - Xw)
]

We use (1/2) for derivative convenience.

---

# Step 3 — Expand the quadratic form

[
J(w) =
\frac{1}{2}(y^Ty - y^TXw - w^TX^Ty + w^TX^TXw)
]

Since scalars satisfy:

[
y^TXw = w^TX^Ty
]

we get

[
J(w) =
\frac{1}{2}(y^Ty - 2w^TX^Ty + w^TX^TXw)
]

---

# Step 4 — Take derivative w.r.t (w)

Matrix derivative identities:

[
\frac{\partial}{\partial w}(w^TAw) = 2Aw
]

[
\frac{\partial}{\partial w}(b^Tw) = b
]

Applying derivative:

[
\nabla_w J =

* X^Ty + X^TXw
  ]

---

# Step 5 — Set gradient to zero

To minimize:

[

* X^Ty + X^TXw = 0
  ]

Rearrange:

[
X^TXw = X^Ty
]

---

# Step 6 — Solve for (w)

Multiply both sides by ((X^TX)^{-1})

[
w = (X^TX)^{-1}X^Ty
]

---

# Final OLS Solution

[
\boxed{w = (X^TX)^{-1}X^Ty}
]

This is the **Normal Equation**.

---

# 🚨 Where OLS Fails

OLS requires:

[
(X^TX)^{-1}
]

to exist.

Problems arise when:

### Multicollinearity

Columns of (X) are linearly dependent

[
rank(X) < p
]

Then

[
det(X^TX) = 0
]

Matrix cannot be inverted.

---

### High dimensional case

If

[
p > m
]

then

[
rank(X^TX) \le m
]

Thus

[
X^TX
]

is **singular**.

OLS fails.

---

# 2️⃣ Ridge Regression

Ridge solves the same problem but **penalizes large weights**.

---

# Step 1 — Ridge Cost Function

[
J(w) =
\frac{1}{2}(y - Xw)^T(y - Xw)
+
\frac{\lambda}{2}w^Tw
]

Second term:

[
\lambda w^Tw
]

is the **L2 regularization penalty**.

---

# Step 2 — Expand the loss

First term expands exactly like OLS:

[
\frac{1}{2}(y^Ty - 2w^TX^Ty + w^TX^TXw)
]

Add penalty term:

[
\frac{\lambda}{2}w^Tw
]

Total cost:

[
J(w) =
\frac{1}{2}(y^Ty - 2w^TX^Ty + w^TX^TXw)
+
\frac{\lambda}{2}w^Tw
]

---

# Step 3 — Take derivative

Derivative of each term:

First term:

[

* X^Ty + X^TXw
  ]

Penalty term:

[
\lambda w
]

Total gradient:

[
\nabla_w J =

* X^Ty + X^TXw + \lambda w
  ]

---

# Step 4 — Set gradient to zero

[

* X^Ty + X^TXw + \lambda w = 0
  ]

Rearrange:

[
X^TXw + \lambda w = X^Ty
]

---

# Step 5 — Factor out (w)

[
(X^TX + \lambda I)w = X^Ty
]

---

# Step 6 — Solve for (w)

[
w = (X^TX + \lambda I)^{-1}X^Ty
]

---

# Final Ridge Solution

[
\boxed{
w = (X^TX + \lambda I)^{-1}X^Ty
}
]

---

# Why This Fixes Instability

Suppose eigenvalues of (X^TX) are

[
\lambda_1, \lambda_2, ..., \lambda_p
]

If some are near zero:

[
(X^TX)^{-1}
]

becomes unstable.

---

### Ridge shifts eigenvalues

Ridge matrix:

[
X^TX + \lambda I
]

Eigenvalues become

[
\lambda_i + \lambda
]

Thus

```
small eigenvalues → larger
matrix becomes invertible
solution becomes stable
```

---

# Key Mathematical Insight

| Method | Matrix being inverted |
| ------ | --------------------- |
| OLS    | (X^TX)                |
| Ridge  | (X^TX + \lambda I)    |

---

# One-line intuition

OLS solves

[
\min ||y - Xw||^2
]

Ridge solves

[
\min ||y - Xw||^2 + \lambda ||w||^2
]

which modifies the **geometry of the optimization problem** and stabilizes the matrix inversion.

---

✅ **Important conceptual takeaway**

Ridge does **not change the regression model**.

It changes the **optimization landscape** so that

```
the matrix to be inverted is always well-conditioned
```

---

If you'd like, I can also show you a **very powerful geometric interpretation using eigenvectors of (X^TX)** that explains **exactly how Ridge shrinks coefficients along unstable directions**. This is one of the **most important conceptual insights in statistical learning theory.**
